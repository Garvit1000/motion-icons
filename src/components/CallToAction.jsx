import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Document} from "postcss";
import { Link } from "react-router-dom";
function CTA() {
    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
                    <div>
                        <Badge>Get started</Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                            Start building with<br />Motion Icons today
                        </h3>
                        <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                            Browse our collection of 3500+ animated icons and integrate them into your project in minutes.
                        </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <Link to="/docs">
                        <Button className="gap-4" variant="outline">
                            Read Docs
                        </Button>
                        </Link>
                        <Link to="/gallery">
                        <Button className="gap-4">
                            Browse Icons <MoveRight className="w-4 h-4" />
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CTA };
