import Globe from 'react-globe.gl';
import Lottie from 'lottie-react';

import Button from '../components/Button';
import alienAnimation from '../../public/animazionealieno.json';

const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Luca Evangelista</p>
              <p className="grid-subtext">
                23 y.o. student of 42 network, passionate about React and modern user centered applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I'm specializing in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        {/* ── Globe card ── */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(182, 182, 182, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 41.9028, lng: 12.4964, text: 'Rome, Italy', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications &amp; locations</p>
              <p className="grid-subtext">Based in Rome, Italy and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        {/* ── Alien animation card (was phone/copy) ── */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="w-full md:h-[126px] sm:h-[276px] h-fit flex justify-center items-center overflow-hidden">
              <Lottie
                animationData={alienAnimation}
                loop
                autoplay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <p className="grid-headtext">Just talk</p>
              <p className="grid-subtext">I&apos;m always open to new ideas and collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
