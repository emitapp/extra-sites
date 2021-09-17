
![Hi](https://media.giphy.com/media/a1QLZUUtCcgyA/giphy.gif)

So ideally these little sites should've been part of the main emit server repo, bit its a bit cumbersome to have a staging+prod workflow with multiple hosting targets in the same repo.

https://github.com/firebase/firebase-tools/issues/590

So for now they'll be here.


download-site: site that redirects to the stores

washer-site: site that cleans Mailchimp template HTML for use by our Sendy instance. Not indexed by google.

accounts-site: Used to manage things like user email verification. Not indexed by google.

`firebase deploy --only hosting:TARGET_NAME	`
