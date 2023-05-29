from django.shortcuts import render, redirect
from .models import BlogPost
from .forms import AddPostForm
from django.contrib.auth.decorators import login_required
# Create your views here.
def all_posts(request):
    user_name = request.user
    posts = BlogPost.objects.all()    
    context = {'posts': posts, 'user': user_name}
    return render(request, 'posts.html', context)


@login_required
def add_post(request):
    form_post = AddPostForm()
    if request.method == "POST":    
        form_post = AddPostForm(request.POST)
        form_post.instance.written_by_user = request.user                   

        if form_post.is_valid():
            form_post.save()
            
            return redirect('/posts')
        else:
            print("smthng wrong")

    return render (request=request, template_name="add_post.html", context={"form":form_post})


@login_required
def my_posts(request):
    user_name = request.user
    posts = BlogPost.objects.filter(written_by_user=user_name)
           
    context = {'posts': posts, "written_by_user":user_name}
    return render(request, 'my_posts.html', context)


@login_required
def delete_post(request, post_id):
    post = BlogPost.objects.get(id=post_id)
    post.delete()
    return redirect('/myposts')


@login_required
def edit_post(request, post_id):
    post = BlogPost.objects.get(id=post_id)

    if request.method != 'POST':
        form = AddPostForm(instance=post)

    else:
        form = AddPostForm(instance=post, data=request.POST) 
        if form.is_valid():
            form.save()
            return redirect('/myposts', post_id=post.id)

    context = {'post': post, 'form': form}
    return render(request, 'edit_post.html', context)