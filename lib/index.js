const defaultBazookaFile = (options) => {
    const bazookafile = 'data.json';

    if (options !== undefined) {
        if (options.bazookafile !== undefined) {
            return options.bazookafile;
        }
    }

    return bazookafile;
};

const plugin = options =>
    (files, metalsmith, done) => {
        setImmediate(done);

        // 1. Fetch Bazooka json file
        const filePaths = Object.keys(files);

        filePaths.forEach((file) => {
            if (file === defaultBazookaFile(options)) {
                const bazookaData = files[file].contents.toString('utf8');

                const siteFiles = Object.keys(bazookaData);
                siteFiles.forEach((sfile) => {
                    const filename = `${sfile}.html`;
                    files[filename] = bazookaData[sfile];
                });
            }
        });

        // 2. Go through bazooka file and add pages to the files array
        //
        done();
    };


module.exports = plugin;
