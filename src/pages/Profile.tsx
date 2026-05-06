export default function Profile(){
    return(
        <section className="work-in-progress-page" aria-labelledby="profile-title">
            <div className="work-in-progress-content">
                <div className="work-in-progress-copy">
                    <p className="work-in-progress-eyebrow">Profile</p>
                    <h1 id="profile-title">Site in progress</h1>
                    <p>
                        I am working on this page now. Soon it will tell a fuller
                        story about my background, skills, and what I am building.
                    </p>
                </div>

                <div className="work-in-progress-visual" aria-hidden="true">
                    {/* Add your working-on-it image here when ready:
                        <img src="/path-to-your-image.png" alt="" />
                    */}
                    <span>Image coming soon</span>
                </div>
            </div>
        </section>
    );
};
