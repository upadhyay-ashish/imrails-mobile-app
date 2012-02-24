# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110624092316) do

  create_table "attachments", :force => true do |t|
    t.integer  "interview_id"
    t.string   "data_file_name"
    t.string   "data_content_type"
    t.integer  "data_file_size"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "interviews", :force => true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "refer"
    t.datetime "cv_recieved_on"
    t.string   "recieved_from"
    t.string   "resource_name"
    t.string   "skills"
    t.integer  "total_experience"
    t.string   "contact_number"
    t.string   "source"
    t.string   "status"
    t.string   "remarks"
    t.string   "first_round"
    t.string   "second_round"
    t.string   "mr_round"
    t.string   "email"
    t.datetime "date_of_interview"
    t.datetime "date_of_joining"
    t.string   "for_location"
  end

  create_table "users", :force => true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "username"
    t.string   "email"
    t.string   "password"
    t.string   "address"
    t.string   "phone_number"
    t.string   "role"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
