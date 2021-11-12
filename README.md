
![Hi](https://media.giphy.com/media/a1QLZUUtCcgyA/giphy.gif)

So ideally these little sites should've been part of the main emit server repo, bit its a bit cumbersome to have a staging+prod workflow with multiple hosting targets in the same repo.

https://github.com/firebase/firebase-tools/issues/590

So for now they'll be here.

main: The main website for Emit.

download-site: Site that redirects to the stores

washer-site: Site that cleans Mailchimp template HTML for use by our Sendy instance. Not indexed by google.

accounts-site: Used to manage things like user email verification. Not indexed by google.

tickets: Experimental site where Emit was going to be a place to get last-minute tickets.

`firebase deploy --only hosting:TARGET_NAME	`

Btw, all the sites were made in a hurry so don't expect good code.
