const assert = require('assert');
const fs = require('fs');
const {bundle, run, assertBundleTree} = require('./utils');

describe('elm', function() {
  it('should produce an elm app when importing a single elm module', async function() {
    let b = await bundle(__dirname + '/integration/elm/main.elm');

    assert.equal(b.assets.size, 2);
    assert.equal(b.childBundles.size, 0);

    let module = run(b);

    assert.equal(typeof module.Main.embed, 'function');
    assert.equal(typeof module.Main.fullscreen, 'function');
  });
});
