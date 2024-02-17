class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.integer :salary
      t.string :name
      t.text :description
      t.date :post_date
      t.date :expire_date
      t.string :country
      t.string :city
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
