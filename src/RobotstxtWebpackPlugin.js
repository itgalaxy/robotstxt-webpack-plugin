import nodeify from 'nodeify';
import path from 'path';
import robotstxt from 'generate-robotstxt';

export default class RobotstxtWebpackPlugin {
    constructor(options = {}) {
        this.options = Object.assign({}, options);
    }

    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) =>
            this.generate(compilation, callback)
        );
    }

    generate(compilation, callback) {
        const { options } = this;

        return nodeify(
            robotstxt(options).then(contents => {
                const dest = options.dest
                    ? path.join(options.dest, 'robots.txt')
                    : 'robots.txt';

                compilation.assets[dest] = {
                    size() {
                        return Buffer.byteLength(this.source(), 'utf8');
                    },
                    source() {
                        return contents;
                    }
                };

                return contents;
            }),
            error => {
                if (error) {
                    compilation.errors.push(error);
                }

                return callback();
            }
        );
    }
}
