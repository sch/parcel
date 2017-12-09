const JSAsset = require('./JSAsset');
const localRequire = require('../utils/localRequire');

const compilerOptions = {
  yes: true
};

class ElmAsset extends JSAsset {
  async parse(code) {
    // const dependencies = await compiler.findAllDependencies(this.name);
    // dependencies.forEach(dependency => this.addDependency(dependency));
    const compiler = localRequire('node-elm-compiler', this.name);

    console.log('dependencies', dependencies);

    this.contents = await compiler.compileToString(
      [this.name],
      compilerOptions
    );
    return await super.parse(this.contents);
  }

  // collectDependencies() {
  //   console.log('name', this.name);
  //   this.compiler.findAllDependencies(this.name).then(dependencies => {
  //     console.log('dependencies', dependencies);
  //     dependencies.forEach(dependency => this.addDependency(dependency));
  //   });
  // }

  // async getDependencies() {
  //   await this.loadIfNeeded();
  //   await this.parseIfNeeded();

  //   const dependencies = await compiler.findAllDependencies(this.name);

  //   console.log('dependencies', dependencies);
  // .then(dependencies => {
  // console.log('dependencies', dependencies);
  // dependencies.forEach(dependency => this.addDependency(dependency));
  // });
  // }
}

module.exports = ElmAsset;
