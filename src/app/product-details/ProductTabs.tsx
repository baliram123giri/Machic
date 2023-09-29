"use client"
import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Specification from './Specification';
import { specificationData } from '@/constant';
import Reviews from './Reviews';
type Props = {}

export const ProductTabs = (props: Props) => {
    return (
        <div><div className="flex w-full flex-col">
            <Tabs aria-label="Options">
                <Tab key="Description" title="Description">
                    <Card shadow='none'>
                        <CardBody >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="Specification" title="Specification">
                    <Card shadow='none'>
                        <CardBody>
                            {specificationData.map((ele) => <Specification key={ele.id} {...ele} />)}
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="Reviews" title={<span>Reviews (1)</span>}>
                    <Card shadow='none'>
                        <CardBody>
                            <Reviews />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>  </div>
    )
}