# Flags
Flags can be used to override default values defined in `tasks/config.json`.

## Example usage
```sh
gulp serve -o
gulp serve --live-reload=false --port=4200
gulp build --target=prod --env=prod 
```

## Available flags
To get list of available flags, run `gulp help` or `gulp --tasks` from CLI.

Flag | Alias | Default value | Description
:----|:------|:--------------|:-----------
`‑‑host` | `-h` | localhost | Hostname used to run the server.
`‑‑port` | `-p` | 8080 | Port used to run the server.
`‑‑open` | `-o` | false | Open application in default browser.
`‑‑sync‑browsers` | | false | Sync activities like clicks, scroll and form inputs across browsers.
`‑‑live‑reload` | | true | Live reload browser on file change.
`‑‑target` | | dev | Specify the build target (development or production with all optimizations enabled).
`‑‑env` | | dev | Specify environment file to be used for build process.
