```
                 _______  _______  _______           _______  _________         _________ _______ 
                (  ____ \(  ____ \(  ____ )|\     /|(  ____ \ \__   __/|\     /|\__   __/(  ____ \
                | (    \/| (    \/| (    )|| )   ( || (    \/    ) (   | )   ( |   ) (   | (    \/
                | (_____ | (__    | (____)|| |   | || (__  _____ | |   | (___) |   | |   | (_____ 
                (_____  )|  __)   |     __)( (   ) )|  __)(_____)| |   |  ___  |   | |   (_____  )
                      ) || (      | (\ (    \ \_/ / | (          | |   | (   ) |   | |         ) |
                /\____) || (____/\| ) \ \__  \   /  | (____/\    | |   | )   ( |___) (___/\____) |
                \_______)(_______/|/   \__/   \_/   (_______/    )_(   |/     \|\_______/\_______)
                                                                                                  
```

A small static web server to hoist static files onto a HTTP port.

## Synopsis ##

```
$ git clone git://github.com/appsattic/serve-this.git
$ cd serve-this
$ npm -d install
$ ./serve-this.js path/to/your/htdocs
```

Now go to [http://localhost:8080/](http://localhost:8080/) to see your static site.

## Usage ##

```
$ serve-this.js <path> <port>
```

Where:

* path - the path to the static files (default: '.')
* port - the port to listen on (default: '8080')

## Thanks ##

Thanks to [cloudhead](https://github.com/cloudhead) for [node-static](https://github.com/cloudhead/node-static).

## Author ##

Written by [Andrew Chilton](http://www.chilts.org/blog/).

Copyright 2012 [AppsAttic](http://www.appsattic.com/).

## License ##

MIT. See LICENSE for more details.

(Ends)
