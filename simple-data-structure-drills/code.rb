transactions = [50_000, -2_000, -25_000, 4_000, -12_000, 5_000, -800, -900, 43_000, -30_000, 15_000, 62_000, -50_000, 42_000]

# Write Ruby code to find out the answers to the following questions:

# * What is the value of the first transaction?
puts transactions.first
# * What is the value of the second transaction?
puts transactions[1]
# * What is the value of the fourth transaction?
puts transactions[3]
# * What is the value of the last transaction?
puts transactions.last
# * What is the value of the second from last transaction?
puts transactions[-2]
# * What is the value of the 5th from last transaction?
puts transactions[-5]
# * What is the value of the transaction with index 5?
puts transactions[4]
# * How many transactions are there in total?
puts transactions.length
# * How many positive transactions are there in total?
puts transactions.count {|amount| amount > 0}
# * How many negative transactions are there in total?
puts transactions.count {|amount| amount < 0}
# * What is the largest withdrawal?
puts transactions.min
# * What is the largest deposit?
puts transactions.max
# * What is the small withdrawal?
puts transactions.select {|amount| amount < 0}.max
# * What is the smallest deposit?
puts transactions.select {|amount| amount > 0}.min
# * What is the total value of all the transactions?
puts transactions.inject(:+)
# * If Dr. Dre's initial balance was $239,900 in this account, what is the value of his balance after his last transaction?
sum = 239900
puts transactions.last + sum

puts "==========="

best_records = {
 "Tupac"=>"All Eyez on Me",
 "Eminem"=>"The Marshall Mathers LP",
 "Wu-Tang Clan"=>"Enter the Wu-Tang (36 Chambers)",
 "Led Zeppelin"=>"Physical Graffiti",
 "Metallica"=>"The Black Album",
 "Pink Floyd"=>"The Dark Side of the Moon",
 "Pearl Jam"=>"Ten",
 "Nirvana"=>"Nevermind"
 }

# Write Ruby code to find out the answers to the following questions:

# * How many records are in `best_records`?
puts best_records.length
# * Who are all the artists listed?
puts best_records.keys
# * What are all the album names in the hash?
puts best_records.values
# * Delete the `Eminem` key-value pair from the list.
puts best_records.delete("Eminem")
# * Add your favorite musician and their best album to the list.
best_records["The Beatles"] = "Abbey Road"
# * Change `Nirvana`'s album to another.
best_records["Nirvana"] = "MTV Unplugged"
# * Is `Nirvana` included in `best_records`?
puts best_records.has_key?("Nirvana")
# * Is `Soundgarden` included in `best_records`?
puts best_records.has_key?("Soundgarden")
# * If `Soundgarden` is not in `best_records` then add a key-value pair for the band.
if best_records.has_key?("Soundgarden")
else
  best_records["Soundgarden"] = "Superunknown"
  puts best_records
  end
# * Which key-value pairs have a key that has a length less than or equal to 6 characters?
best_records.keys.each do |key|
  puts key if key.length <= 6
end
# * Which key-value pairs have a value that is greater than 10 characters?
best_records.values.each do |value|
  puts value if value.length > 10
end
