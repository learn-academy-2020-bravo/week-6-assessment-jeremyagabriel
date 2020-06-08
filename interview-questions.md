# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The foreign in this relationship would be called animal_id and would be a part of the Sightings model.

  Researched answer: When you create an association, Rails makes two major assumptions – first, that the class of the model your association points to is based directly off of the name of the association, and, second, that the foreign key in any belongs_to relationship will be called yourassociationname_id.



2. Which routes must always be passed params and why?

  Your answer:
  model#show
  model#edit
  model#update
  model#destroy

  Each route is ID specific, so the associated ID of the model entry must be passed through

  Researched answer:
  get '/resource_names/:id' => 'resource_name#show
  put/patch '/resource_names/:id/edit' => 'resource_name#edit'
  put/patch '/resource_names/:id' => 'resource_name#update'
  delete '/resource_names/:id' => 'resource_name#destroy'

  /:id is the params to be passed to the url


3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: get '/game/:guess' => 'main#show'

  A little unclear what kind of route is needed?

4. Name three rails generator commands. What is created by each?

  Your answer:

  rails generate model ModelName key1:datatype key2:datatype (etc) - creates a model
  rails generate migration describe_action_to_specific_tables - creates a migration where you can update the schema
  rails generate controller model_name - creates controller for specific model

  Researched answer:

  rails generate model NAME [field[:type][:index] field[:type][:index]] [options]
  Create rails files for model generator.

  rails generate migration migration_description
  Rails will generate a few files for you when generating a migration. The first is the migration file itself, located in db/migrate

  rails generate controller NAME [action action] [options]

  To create a controller within a module, specify the controller name as a path like 'parent_module/controller_name'.


5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"    - Display an index page

/users/1      method="GET"    - Display a page specific to the entry associated with the id 1

/users/new    method="GET"    - Display a page for user input associated with a new entry

/users/       method="POST"   - Creates the new model instance into the database

/users/1      method="PUT"    - Updates the model instance of id 1

/users/1      method="DELETE" - Deletes the entire instance of id 1
