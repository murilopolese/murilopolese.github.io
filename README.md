# Personal website, portfolio and blog

Hey! This is my personal website.

Check [murilopolese.com](http://www.murilopolese.com) to see how it looks like.

## Environment variables


## Deploy

aws s3 sync ./ s3://www.murilopolese.com/ --exclude '.*' --exclude 'venv' --acl public-read
