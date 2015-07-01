# ![naked][1]

This app merely redirects any requests into `process.env.HOST` using `process.env.PROTOCOL`.

# install

[![Deploy to Heroku][2]][3]

# configure

if this app is deployed to `www.foo.bar`, and you want to redirect requests to `foo.bar`, just do:

```shell
heroku config:add HOST=foo.bar
```

the opposite use case?

```shell
heroku config:add HOST=www.foo.bar
```

# license

MIT

[1]: https://raw.github.com/bevacqua/naked/master/logo.png
[2]: https://www.herokucdn.com/deploy/button.png
[3]: https://heroku.com/deploy?template=https://github.com/bevacqua/naked
