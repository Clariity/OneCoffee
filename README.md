One Coffee

# Infinite Connections

### Setup

1. Ensure you have Git on your local machine where you will be writing. Download it here if you don't: [`Get Git`](https://git-scm.com/downloads)
2. Fork this repository into your own Github account. This creates a copy of the repository in your account. You can fork by clicking the Fork button at the top of the repository.
3. Go to the forked repository that is now in your account and clone it. Get the clone URL by clicking on the green Code button and copy the URL to your clipboard (Will look something like https://github.com/Clariity/OneCoffee.git). Then on the command line do: `git clone https://github.com/YourUsername/OneCoffee.git`
4. Once the clone has completed, on the command line enter the following to change to the One Coffee directory: `cd OneCoffee`
5. Use the command line to create a new branch for the post you wish to write, for example: `git checkout -b your-branch-name`
6. Set a remote called "upstream" that references the the main Design Rant repo (will be needed for later): `git remote add upstream https://github.com/Clariity/OneCoffee.git`

### Publishing your content

1. Stage your local changes by executing `git add .` in the command line
2. Commit your changes by executing `git commit -m "Added a new awesome features"`
3. Push your changes to your forked repository using the command `git push --set-upstream origin your-branch-name` or if this isn't your first time then use `git push origin your-branch-name`
4. You will see the new commit on GitHub. Click the "Compare & pull request" button and then "Create pull request". This will request to merge into the master branch of `Clariity/OneCoffee`
5. If all done correctly, your pull request will be approved and your post will be live
6. When you want to contribute again in the future you will need to sync the updated master branch with your fork. To do this, enter the following commands on the command line:
   ```
   git checkout master
   git pull upstream master
   ```
   Do this before you want to add another feature and then just checkout to a new branch using `git checkout -b your-new-branch-name` and repeat the steps above
