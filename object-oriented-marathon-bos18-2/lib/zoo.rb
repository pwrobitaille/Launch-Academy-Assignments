class Zoo
  attr_reader :cages, :employees

  def initialize(name, season_opening_date, season_closing_date)
    @name = name
    @season_closing_date = season_closing_date
    @season_opening_date = season_opening_date
    @cages = Array.new(10) {Cage.new}
    @employees = []
  end

  def add_employee(employee)
    @employees << employee
  end

  def open?(date)
    date.between?(@season_opening_date, @season_closing_date)
  end

  def add_animal(animal)
    @cages.each do |cage|
      if cage.empty?
          cage.animal = animal
          break
      end
    end
  end

  def visit
    phrase = ""
    @employees.each do |employee|
      phrase += "#{employee.greet}\n"
    end
    @cages.each do |cage|
      if cage.empty? == false
      phrase += "#{cage.animal.speak}\n"
      end
    end
    phrase
  end
end
