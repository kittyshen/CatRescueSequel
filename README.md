# CatRescueSequel
UC Berkeley coding assignment 13
The Sequel

### Overview

This homework assignment is **optional**.

In this assignment, you're going to Sequelize the `cat` app you made this week. We've split this exercise into three different tiers, all with different tasks and expectations. Finish whichever tier will provide you with the most reasonable challenge.

### Before you Begin

1. Create a new folder called `sequelizedcat`
2. Copy the contents of your completed assignment from last week.
   * Remove the older git connection with `rm -R .git`.
   * Then connect this folder with a new github repo.
3. Run `sequelize init` to create the necessary files.

4. **Note**: If for any reason you don't have a finished assignment for last week, no problem. Message the instructor, who will provide you will a skeleton file to work of for this week.

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

## Instructions

Put in your best efforts to complete one of the three available challenge tiers. Remember to deploy your assignment to Heroku once complete.

#### Tier 1: Sequelized! (Basic to Moderate)

* Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.

* That means:

  * Replacing your MySQL `cat` model with a Sequelized equivalent.

    * Don't forget to edit the model and initial migration file to make the cat's devoured field carry a default value of false -- otherwise you might encounter bugs.
      * There's no option to include that default in the command line, so you'll need to open up your editor to make this change.
    * Don't forget to sync the models!

    * Edit your new `config.json` file to include your database configurations. Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

    * Remove your old ORM file, as well as any references to it in `cats_controller.js`. Replace those references with Sequelize's ORM methods.

* When you finish, your site should function just like your last one:
    ![1-Sequelized](Images/1-Sequelized.jpg)

#### Tier 2: Customer Associations (Challenge)

* Add in a Customer association to the project. This will involve creating at least one new Customer model and connecting it with your cat model.

* What kind of association you would like to use is up to you. Does a Customer have one cat? Many cats?

* For example, you could make a site that logs the name of which Customer ate which cat, where each Customer only gets one cat. If you can't think of another type of association, try this one!

    ![3-Associated](Images/3-Associated.jpg)

* If you do go select this tier, you must edit the handlebars files and CSS stylesheets to implement some sort of additional feature to the site. We don't want you to just connect two models and submit your project. Make your site do something relevant to this association.

#### Bonus! (Challenge)

* Add validations to your models where:

  * A cat's name cannot be null
  * A cat's devoured status is false by default
  * A Customer's name cannot be null

* Order the cats you send back to the user in alphabetical order using the Sequelize "order" option.