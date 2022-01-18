# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.destroy_all
User.destroy_all
Comment.destroy_all
Like.destroy_all

u1 = User.create(username: 'bob', password_digest:'password', email:'bob@gmail.com')
u2 = User.create(username: 'Lucy', password_digest:'lucy', email:'lucy@gmail.com')


p1 = Post.create(image: 'image', caption: 'blah blah blah', total_likes: 1, user_id: u1.id)

p1.picture.attach(
    io: File.open('public/pictures/facetache.png'),
    filename: 'facetache.png',
    content_type: 'application/png'
)

c1 = Comment.create(comment: "noice", username: "bob", user_id: u1.id, post_id: p1.id)

l1= Like.create(user_id: 1, post_id: 1)