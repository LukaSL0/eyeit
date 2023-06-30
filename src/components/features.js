import '../style/features.css';
import FeaturesLayout from './modules/features-layout.js';

export default function Features() {
    
    return (
        <section>
            <div className="features" id="features">
                <div className="features-h">
                    <i className="fas fa-scroll"></i>
                    <h1>Features</h1>
                </div>
                <div className="features-box">
                    <FeaturesLayout
                        icon="fas fa-user-secret"
                        feature="Detections"
                        desc="We have the most detections as possible, mainly detecting the most famous and paid cheats."
                    />
                    <FeaturesLayout
                        icon="fas fa-shield-alt"
                        feature="Trusted"
                        desc="Our tool do not have 'false positives', in other words, if we say a player is cheating, he is certainly cheating."
                    />
                    <FeaturesLayout
                        icon="fas fa-headphones-alt"
                        feature="Support"
                        desc="We have 24/7 support for english and portuguese, make sure to join our discord."
                    />
                </div>
                <div className="features-box">
                    <FeaturesLayout
                        icon="fas fa-lock"
                        feature="Privacy"
                        desc="We are very rigorous at privacy, our tool only check some windows processes and the game memory, none personal informations are collected."
                    />
                    <FeaturesLayout
                        icon="fas fa-stopwatch"
                        feature="Efficiency"
                        desc="A scan can take from ~30 to ~40 seconds depending how fast is the computer."
                    />
                    <FeaturesLayout
                        icon="fas fa-calendar-check"
                        feature="UpTime"
                        desc="Our tool is updated every time a new cheat is released or get a new update, you can check the latest update at changelogs."
                    />
                </div>
            </div>
        </section>
    )
}