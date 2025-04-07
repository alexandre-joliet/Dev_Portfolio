uniform float uTime;
uniform float uPixelRatio;
uniform float uPointSize;

attribute float aScale;

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(uTime / 20.0 + modelPosition.x * aScale);
    modelPosition.z += cos(uTime / 20.0 + modelPosition.x * aScale);

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    gl_PointSize = uPointSize * aScale * uPixelRatio;
    gl_PointSize *= (1.0 / - viewPosition.z);
}