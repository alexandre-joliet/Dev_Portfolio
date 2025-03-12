import { Bloom } from "@react-three/postprocessing";

const PostprocessingSettings = () => {
    return (
        <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0}
            intensity={2}
        />
    );
};

export default PostprocessingSettings;
