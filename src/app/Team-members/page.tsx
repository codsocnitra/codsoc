import React from "react";
import AboutTeamInner from "../../components/AboutTeamInner";
import HeaderOne from "../../components/HeaderOne";
import TopHeaderOne from "../../components/TopHeaderOne";
import AOSWrap from "../../helper/AOSWrap";
import CustomCursor from "../../helper/CustomCursor";
import FooterOne from "../../components/FooterOne";
import AllTeamMembers from "../../components/AllTeamMembers";

const page = () => {
    return (
        <AOSWrap>
            <section className='heading-black'>
                {/* CustomCursor */}
                <CustomCursor />

                {/* Top Header One */}
                <TopHeaderOne />

                {/* HeaderOne */}
                <HeaderOne />

                {/* AllTeamMembers */}
                <AllTeamMembers />
                <FooterOne />
            </section>
        </AOSWrap>
    )
}

export default page;