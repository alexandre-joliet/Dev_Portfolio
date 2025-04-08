import { Bloom, EffectComposer } from "@react-three/postprocessing";

const PostprocessingSettings = () => {
    return (
        <>
            <EffectComposer>
                <Bloom
                    intensity={1}
                    luminanceThreshold={1} // With a value of 1, allows to select manually the glowing elements with toneMapped = "false"
                    luminanceSmoothing={0.75}
                    mipmapBlur
                />
            </EffectComposer>
        </>
    );
};

export default PostprocessingSettings;
