# YOUR CODE HERE
beer_bottles = 99

while beer_bottles != 1
  puts "#{beer_bottles} bottles of beer on the wall, #{beer_bottles} bottles of beer."
  puts "Take one down pass it around, #{beer_bottles - 1} bottles of beer on the wall. \n "
  beer_bottles -= 1
  if beer_bottles % 10 == 0
    puts "#{beer_bottles} bottles of beer on the wall, #{beer_bottles} bottles of beer!"
    puts "Take one down pass it around, #{beer_bottles - 1} bottles of beer on the wall. \n "
    variable = beer_bottles -= 1
 end
  if beer_bottles == 1
    puts "#{beer_bottles} bottle of beer on the wall, #{beer_bottles} bottle of beer."
    puts "Take one down pass it around, no more bottles of beer on the wall. \n "
  end
end
puts "No more bottles of beer on the wall, no more bottles of beer."
puts "Got to the store and buy some more, 99 bottles of beer on the wall."
