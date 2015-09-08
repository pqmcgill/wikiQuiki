# wikiQuiki
A game in which you race against your friends via wikipedia articles

## installation
install webpack globally

    npm install -g webpack

clone/download this repo locally

install app dependencies from the root folder

    npm install

## running wikiQuiki

run the following command in the root folder to bundle the app

	webpack

serve the public folder over localhost replacing &lt;PORT&gt; with the port you'd like to serve the app on 

    cd public/
    python -m SimpleHTTPServer <PORT>

then navigate to the following url in your browser, again replacing &lt;PORT&gt; with your port

    http://localhost:<PORT>


