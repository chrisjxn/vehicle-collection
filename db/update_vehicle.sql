UPDATE vehicles 
SET 
  type = $2, 
  color = $3, 
  description = $4 
WHERE id = $1;