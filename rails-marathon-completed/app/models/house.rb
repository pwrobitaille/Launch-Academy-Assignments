class House < ApplicationRecord
  has_many :members
  
  validates_presence_of :name, :author, :source

end
