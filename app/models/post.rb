class Post < ApplicationRecord
    has_many :likes
    has_many :comments
    has_many :saved_posts
    has_many :users, through: :saved_posts

    validates :image, presence: true
    has_one_attached :image
end
