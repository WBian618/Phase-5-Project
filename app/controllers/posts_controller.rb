class PostsController < ApplicationController
    # skip_before_action :authenticate_user
    skip_before_action :authenticate_user, only: [:create,:index]

    def create  
        post = Post.create!(post_params)
        if post.valid?
            render json: post, status: :created
        end
    end

    def update
        @post.update!(update_post)
        render json:@post, status: :ok
    end

    def destroy
        @post.destroy
        render json:{},status: :ok
    end

    def show
        post = Post.find(params[:id])
        picture = rails_blob_path(post.picture)
        render json: {post: post, picture: picture}
    end

    # def increment_likes
    #     @current_user?
    #     render json: Post.increment(:total_likes, by = 1)
    # end

    def index
        posts = Post.all.order('created_at DESC')
        render json: posts
    end

    private

    def post_params
        params.permit(:caption, :image, :user_id, :picture)
    end

    def update_post
        params.permit(:caption)
    end



end