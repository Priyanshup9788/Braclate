import React from 'react'

const About = () => {
  return (
    <>
        <section class="about">
        <div class="content">
            <h2>Our Story</h2>
            <p>At [Your Brand], we craft timeless pieces that blend elegance with artistry. Each design is meticulously handcrafted with precision and passion.</p>
        </div>
        <img src="https://cdn.leonardo.ai/users/68554cba-c9ca-4875-831a-3ab508f5f2f3/generations/990ade04-8a6e-4391-b987-8e8acf6cbbaa/segments/2:4:1/Flux_Dev_A_dimly_lit_rusticthemed_jewelry_workshop_with_worn_w_1.jpeg" alt="Jewelry Workshop" />
    </section>
    
    <section class="team">
        <h2>Meet Our Team</h2>
        <div class="team-container">
            <div class="member">
                <img src="https://cdn.leonardo.ai/users/68554cba-c9ca-4875-831a-3ab508f5f2f3/generations/f77fe0cd-55d6-4a21-9340-faca94560b32/segments/2:4:1/Flux_Dev_A_elegant_jeweller_designer_with_a_warm_and_inviting__1.jpeg" alt="Designer" />
                <h3>Jane Doe</h3>
                <p>Lead Designer</p>
            </div>
            <div class="member">
                <img src="https://cdn.leonardo.ai/users/eb55e4b4-b624-4eac-b0c0-5c9e8cc1463f/generations/700757c6-132b-4a18-838e-91cf3c8ba767/segments/2:4:1/Flux_Dev_A_bespectacled_jewellery_craftsman_with_a_kind_face_w_1.jpeg" alt="Craftsman" />
                <h3>John Smith</h3>
                <p>Master Craftsman</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default About