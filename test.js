AFRAME.registerShader('test', {
  schema: { 'redness': { type: "number", default: 0.5, max: 1, min: 0, is: 'uniform' } },
  fragmentShader:
    'uniform float redness; ' +
    'void main() { ' +
      'gl_FragColor = vec4(redness,0.0,0.0,1.0); ' +
    '}',
});
