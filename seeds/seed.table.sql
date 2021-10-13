BEGIN;

INSERT INTO users (userName, password, name)
VALUES
  ('apullen','12345', 'Andrea');
  COMMIT;


  INSERT INTO moods (moodTitle, color)
VALUES
  ('Energetic','pink'),
  ('Bored', 'green'),
  ('Sad', 'blue'),
  ('Lazy', 'yellow'),
  ('Lonely', 'purple'),
  ('Anxious', 'orange');

  COMMIT;


  INSERT INTO activities (actTitle, moodID, time)
VALUES
  ('Organize a Closet', 135, '3'),
  ('Organize Your Pantry or Kitchen Cabinets', 135, '3'),
  ('Find a Local Trail and Go for a Walk', 135, '2'),
  ('Write in Your Gratitude Journal', 138, '0'),
  ('Write in Your Gratitude Journal', 140, '0'),
  ('Make an Action Plan', 141, '1'),
  ('Write in Your Gratitude Journal', 141, '0'),
  ('Choose a Small, Easy Cleaning Task ex: Take Out Trash', 139, '0'),
  ('Look Online for Fun Ideas & Plan a Friends Night', 137, '1'),
  ('Call a Friend to Meet Somewhere Outside & Chat', 137, '1'),
  ('Put on Music and Relax in the Shower or Bath', 139, '0'),
  ('Put on Music and Relax in the Shower or Bath', 138, '0'),
  ('Put on Music and Relax in the Shower or Bath', 140, '0'),
  ('Find a DIY Facemask Recipe and Make it', 139, '0'),
  ('Find a DIY Facemask Recipe and Make it', 137, '0');
  COMMIT;