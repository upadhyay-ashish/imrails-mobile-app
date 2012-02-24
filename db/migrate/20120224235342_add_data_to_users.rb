class AddDataToUsers < ActiveRecord::Migration
  def self.up
	execute"insert into users(username,password,role) values('admin','password','SuperAdmin')"
  end

  def self.down
	delete from users;
  end
end
