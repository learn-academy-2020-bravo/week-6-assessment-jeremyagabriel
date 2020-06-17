# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1) Model's controller which holds all the methods and logic
class BlogPostsController < ApplicationController
  def index
    # 2) Setting an instance variable that accesses all the instances of the model BlogPost, which can be used in the index erb, which calls GET
    @posts = BlogPost.all
  end

  def show
    # 3) Setting instance variable that targets specifically the model instance with that particular id, which can be used in the specific show page, which calls GET
    @post = BlogPost.find(params[:id])
  end

  # 4) The new method calls GET to display html allowing the user to input their information for a new model instance
  def new
  end

  def create
    # 5) The create method calls POST to create the new instance into the database. The below variable creates the instance by pulling the submitted values from new and validates them based on the strong params. If the variable can be successfully created then the page continues from new, if not, the page remains on the new page
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.delete
      redirect_to blog_posts_path
    else
      # 6) This else condition redirects the user back to the show page of that particular id if the destroy method was not successful
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Private indicates the start of the strong parameters
  private
  def blog_post_params
    # 8) Indicates that param eters require a Blog_post object, formatted into a hash, and will allow the values of title and content
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9) The Class rb file is where we describe the relationships between other models
class BlogPost < ApplicationRecord
  # 10) Create the relationship between BlogPost and Comment, indicating that a single BlogPost can have many comments associated with it; meaning a single comment belongs to one BlogPost
  has_many :comments
end
