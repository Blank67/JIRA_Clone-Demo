"use client";

import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Image from "next/image";
import "./SideBar.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";

const SideBar = () => {
    const navigate = useRouter();
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (
        <div className="">
            <Sidebar
                collapsed={sideBarOpen}
                backgroundColor="blue"
                className="sidebar-height"
            >
                <Menu>
                    <div className="text-center">
                        <Image
                            width="200"
                            height="150"
                            src="data:image/jpeg;base64,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"
                            alt=""
                        />
                    </div>
                    <MenuItem
                        icon={<MenuOutlinedIcon />}
                        onClick={() => {
                            setSideBarOpen(!sideBarOpen);
                        }}
                    ></MenuItem>
                    <MenuItem
                        icon={<SpaceDashboardOutlinedIcon />}
                        component={<Link href={"/dashboard"} />}
                    >
                        Dashboard
                    </MenuItem>
                    <SubMenu label="Masters">
                        <MenuItem>Team Members</MenuItem>
                        <MenuItem>Role Master</MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<FindInPageOutlinedIcon />}
                        component={<Link href={"/dashboard/projects"} />}
                    >
                        Projects
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default SideBar;
