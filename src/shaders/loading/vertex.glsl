void main()
{
    // To ensure the plane is always in front of the camera, we are not applying the transformations
    gl_Position = vec4(position, 1.0);
}