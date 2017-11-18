class Theater
  def initializer(seats)
    @capacity = seats
    @admitted = 0
  end

  def admit(patrons = 1)
    if @admitted + patrons > @capacity
      "Sorry we're at capacity"
    else
      @admitted += patrons
  end

  def at_capacity?
    @admitted == @capacity

  end

  def record_walk_outs(patrons -1)
    @admitted -= patrons
  end

end
