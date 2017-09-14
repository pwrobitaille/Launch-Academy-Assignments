require "sinatra"
require "sinatra/reloader"
require_relative "models/article"
require "csv"
require  "pry"

set :bind, '0.0.0.0'  # bind to all interfaces

def array_of_article_objects
  articles = []
  CSV.foreach('articles.csv', headers: true) do |row|
    articles << Article.new(row["name"], row["url"], row["description"])
  end
  articles
end

get '/' do
  redirect to "/articles"
end

get '/articles' do
  @articles = array_of_article_objects
  erb :index
end

get '/articles/new' do
  erb :new_article
end

post '/articles/new' do
  CSV.open("articles.csv", "a") do |csv|
    csv << [params[:name], params[:url], params[:description]]
  end
  redirect to "/"
end
