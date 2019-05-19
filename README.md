# Rhythm Radio

## Description
Rhythm Radio is a simple music player built with React. From serving as study music to background noise, Rhythm Radio is equiped with the essential music player controls for providing a pleasurable listening experience. 

View working demo here: https://rhythmradio.herokuapp.com/

## Technologies Used:

HTML5, CSS3, React.js

## Getting Started

# Installing

Make sure you have React installed. The simplest way is through the npm package manager. If you haven't installed npm or Node.js here's a link to a Codecademy article for installing both and getting up and ready with React:

https://www.codecademy.com/articles/react-setup-i

You will also want to install React Icons in order for the icons to properly appear when you open the app on your local environment:

`npm install react-icons --save`

For further React Icons install instructions: https://react-icons.netlify.com/#/

## Usage

```
class PostsController < ApplicationController
  before_action :require_sign_in, except: :show

  before_action :authorize_user, except: [:show, :new, :create]

  def show
    @post = Post.find(params[:id])
  end

  def new
    @topic = Topic.find(params[:topic_id])
    @post = Post.new
  end

  def create
    @topic = Topic.find(params[:topic_id])
    @post = @topic.posts.build(post_params)
    @post.user = current_user

    if @post.save
      flash[:notice] = "Post was saved."
      redirect_to [@topic, @post]
    else
      flash.now[:alert] = "There was an error saving the post. Please try again."
      render :new
    end
  end
```

## Screenshots

![Rhythm Radio Landing Page](assets/images/rhythmradiolanding.png)

![Rhythm Radio Albums Page](assets/images/rhythmradioalbums.png)

![Rhythm Radio 1st Album Page](assets/images/rhythmradioalbum1.png)

---------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).