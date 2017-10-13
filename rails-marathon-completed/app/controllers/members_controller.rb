class MembersController < ApplicationController

# #try to explain this def new
  def new
    @house = House.find(params[:house_id])
    @member = Member.new
  end

  def create
    @member = Member.new(member_params)
    @house = House.find(params[:house_id])
    #why house_id I had:
    @member.house = @house
    #and it should work right?
    # @member.house_id = @house.id

    if @member.save
      flash[:notice] = "Member added successfully."
      redirect_to @house
    else
      render :new
    end
  end

  def member_params
    params.require(:member).permit(:first_name, :last_name, :house)
  end
end
