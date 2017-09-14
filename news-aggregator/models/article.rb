class Article
  attr_reader :name, :url, :description

  def initialize(name, url, description)
    @name = name
    @url = url
    @description = description
  end
end
