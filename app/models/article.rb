class Article < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  has_rich_text :body

  validates :title, presence: true
  validates :body, presence: true

  before_save :generate_slug

  private

  def generate_slug
    slug = title.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/^-+|-+$/, '')
    hash = Digest::MD5.hexdigest(title)[0..10]
    slug = "#{slug}-#{hash}"
  end
end
