from django.urls import path
from . import views 
from .views import BlogView

app_name = "blog"   


urlpatterns = [   
    path("posts", views.all_posts, name="all_posts"),
    path("blog", BlogView.as_view(), name="blog_posts"),
    path("addpost", views.add_post, name="add_post"), 
    path("myposts", views.my_posts, name="my_posts"),
    path("delete_post/<int:post_id>/", views.delete_post, name="delete_post"),     
    path("edit_post/<int:post_id>/", views.edit_post, name="edit_post"),  

]