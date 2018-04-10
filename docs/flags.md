# Flags
Flags can be used to override default values defined in `tasks/config.json` or
to provide additional configuration for build process. Some flags may be task
specific (see below table for details).

## Example usage
```sh
gulp serve -o
gulp serve --live-reload=false --port=4200
gulp build --target=prod --env=prod 
```

## Available flags
To get list of available flags run `gulp help` command.
To show full tasks tree with flags run `gulp --tasks --depth=1`.

Flag | Alias | Default value | Description
:----|:------|:--------------|:-----------
`‑‑host` | `-h` | localhost | Hostname used to run the server.
`‑‑port` | `-p` | 8080 | Port used to run the server.
`‑‑open` | `-o` | false | Open application in default browser.
`‑‑sync‑browsers` | | false | Sync activities like clicks, scroll and form inputs across browsers.
`‑‑live‑reload` | | true | Live reload browser on file change.
`‑‑target` | | dev | Specify the build target (development or production with all optimizations). Supported values: `dev`, `prod`.
`‑‑env` | | dev | Specify environment file to be used for build process.
