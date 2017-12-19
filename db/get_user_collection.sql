SELECT 
  vehicles.id, 
  first_name as owner_first, 
  last_name as owner_last, 
  type, 
  color, 
  description, 
  photo_url 
FROM vehicles 
LEFT JOIN users ON users.id = vehicles.user_id 
WHERE users.id = $1;