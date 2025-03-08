import Link from "next/link";
import type { AppMetadata } from "../../types/app";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { cn } from "../../lib/utils";

export function AppCard(props: AppMetadata) {
  const { name, description, icon, path } = props;

  return (
    <Link href={path}>
      <Card
        className={cn(
          "group transition-colors hover:bg-muted/50",
          "cursor-pointer border-border"
        )}
      >
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="text-2xl group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <div>
              <CardTitle className="text-lg mb-1">{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
