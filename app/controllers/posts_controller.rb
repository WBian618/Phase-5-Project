class PostsController < ApplicationController
    def index
        posts = Post.all.order('created_at DESC')
        render json: posts
    end

    def create
        post = Post.create!(post_params)
        if post.valid?
            render json: post, status: :created
        end
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def update
        post = Post.find!(params[:id])
        post.update(update_params)
        render json: post, status: :ok
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy, status: :ok
        render json: {}
    end

    private

    def post_params
        params.permit(:image, :caption, :user_id)
    end

    def update_params
        params.permit(:caption)
    end
end
