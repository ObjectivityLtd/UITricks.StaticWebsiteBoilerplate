# Copying assets
In the assets section you can put a list of static files that should be copied to
the build output directory – by default this entire `assets/` directory and a few
configuration files. Files will be copied directly to `dist/` directory. If you wish
to copy other directories or copy to custom location, you can use extended syntax:
```json
{ "src": "src/my-directory/**/*", "dest": "dist/my-new-directory/subfolder", "base": "src/my-directory" },
```
This will copy content of `src/my-directory/` to `dist/my-new-directory/subfolder/`.
Parameter `dest` is optional – without it files will be copied directly to `dist/`.
